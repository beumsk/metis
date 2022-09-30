<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220929074319 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_information_template ADD sugg_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_information_template ADD CONSTRAINT FK_781CD598FE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id)');
        $this->addSql('CREATE INDEX IDX_781CD598FE0F17F ON patients_information_template (sugg_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_information_template DROP FOREIGN KEY FK_781CD598FE0F17F');
        $this->addSql('DROP INDEX IDX_781CD598FE0F17F ON patients_information_template');
        $this->addSql('ALTER TABLE patients_information_template DROP sugg_id');
    }
}
