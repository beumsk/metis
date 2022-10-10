<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221010100352 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_reports_indicators ADD fore_id INT DEFAULT NULL, ADD indi_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE followup_reports_indicators ADD CONSTRAINT FK_A8D52E719A42B392 FOREIGN KEY (fore_id) REFERENCES followup_reports (id)');
        $this->addSql('ALTER TABLE followup_reports_indicators ADD CONSTRAINT FK_A8D52E71220CD44 FOREIGN KEY (indi_id) REFERENCES indicators (id)');
        $this->addSql('CREATE INDEX IDX_A8D52E719A42B392 ON followup_reports_indicators (fore_id)');
        $this->addSql('CREATE INDEX IDX_A8D52E71220CD44 ON followup_reports_indicators (indi_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_reports_indicators DROP FOREIGN KEY FK_A8D52E719A42B392');
        $this->addSql('ALTER TABLE followup_reports_indicators DROP FOREIGN KEY FK_A8D52E71220CD44');
        $this->addSql('DROP INDEX IDX_A8D52E719A42B392 ON followup_reports_indicators');
        $this->addSql('DROP INDEX IDX_A8D52E71220CD44 ON followup_reports_indicators');
        $this->addSql('ALTER TABLE followup_reports_indicators DROP fore_id, DROP indi_id');
    }
}
