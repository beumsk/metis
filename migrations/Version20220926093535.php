<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220926093535 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE suggestions ADD parent_sugg_id INT NOT NULL');
        $this->addSql('ALTER TABLE suggestions ADD CONSTRAINT FK_91B686147DA88539 FOREIGN KEY (parent_sugg_id) REFERENCES suggestions (id)');
        $this->addSql('CREATE INDEX IDX_91B686147DA88539 ON suggestions (parent_sugg_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE suggestions DROP FOREIGN KEY FK_91B686147DA88539');
        $this->addSql('DROP INDEX IDX_91B686147DA88539 ON suggestions');
        $this->addSql('ALTER TABLE suggestions DROP parent_sugg_id');
    }
}
