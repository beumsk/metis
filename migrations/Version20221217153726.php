<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221217153726 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients ADD fore_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients ADD CONSTRAINT FK_2CCC2E2C9A42B392 FOREIGN KEY (fore_id) REFERENCES followup_reports (id)');
        $this->addSql('CREATE INDEX IDX_2CCC2E2C9A42B392 ON patients (fore_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients DROP FOREIGN KEY FK_2CCC2E2C9A42B392');
        $this->addSql('DROP INDEX IDX_2CCC2E2C9A42B392 ON patients');
        $this->addSql('ALTER TABLE patients DROP fore_id');
    }
}
