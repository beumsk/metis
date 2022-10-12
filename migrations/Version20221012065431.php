<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221012065431 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_places ADD sugg_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_places ADD CONSTRAINT FK_F426A924FE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id)');
        $this->addSql('CREATE INDEX IDX_F426A924FE0F17F ON patients_places (sugg_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_places DROP FOREIGN KEY FK_F426A924FE0F17F');
        $this->addSql('DROP INDEX IDX_F426A924FE0F17F ON patients_places');
        $this->addSql('ALTER TABLE patients_places DROP sugg_id');
    }
}
