<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221231230417 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_reports_indicators DROP FOREIGN KEY FK_A8D52E712B656855');
        $this->addSql('DROP INDEX IDX_A8D52E712B656855 ON followup_reports_indicators');
        $this->addSql('ALTER TABLE followup_reports_indicators DROP followup_reports_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_reports_indicators ADD followup_reports_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE followup_reports_indicators ADD CONSTRAINT FK_A8D52E712B656855 FOREIGN KEY (followup_reports_id) REFERENCES followup_reports (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_A8D52E712B656855 ON followup_reports_indicators (followup_reports_id)');
    }
}
