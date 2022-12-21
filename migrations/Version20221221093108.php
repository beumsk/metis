<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221221093108 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX IDX_2FD5F4B89A42B392 ON followup_reports');
        $this->addSql('ALTER TABLE followup_reports DROP fore_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_reports ADD fore_id INT DEFAULT NULL');
        $this->addSql('CREATE INDEX IDX_2FD5F4B89A42B392 ON followup_reports (fore_id)');
    }
}
