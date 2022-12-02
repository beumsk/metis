<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221201193455 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A6172FE0F17F');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A6172FE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A6172FE0F17F');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A6172FE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id) ON UPDATE NO ACTION ON DELETE SET NULL');
    }
}
