<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221231225622 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE followup_report_indicators_groups (fore_id INT NOT NULL, igrp_id INT NOT NULL, INDEX IDX_35C507F09A42B392 (fore_id), INDEX IDX_35C507F0E79EE6BB (igrp_id), PRIMARY KEY(fore_id, igrp_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE followup_reports_indicators (id INT AUTO_INCREMENT NOT NULL, fore_id INT DEFAULT NULL, indi_id INT DEFAULT NULL, followup_reports_id INT DEFAULT NULL, value INT DEFAULT NULL, comment LONGTEXT DEFAULT NULL, INDEX IDX_A8D52E719A42B392 (fore_id), INDEX IDX_A8D52E71220CD44 (indi_id), INDEX IDX_A8D52E712B656855 (followup_reports_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE followup_report_indicators_groups ADD CONSTRAINT FK_35C507F09A42B392 FOREIGN KEY (fore_id) REFERENCES followup_reports (id)');
        $this->addSql('ALTER TABLE followup_report_indicators_groups ADD CONSTRAINT FK_35C507F0E79EE6BB FOREIGN KEY (igrp_id) REFERENCES indicators_groups (id)');
        $this->addSql('ALTER TABLE followup_reports_indicators ADD CONSTRAINT FK_A8D52E719A42B392 FOREIGN KEY (fore_id) REFERENCES followup_reports (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE followup_reports_indicators ADD CONSTRAINT FK_A8D52E71220CD44 FOREIGN KEY (indi_id) REFERENCES indicators (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE followup_reports_indicators ADD CONSTRAINT FK_A8D52E712B656855 FOREIGN KEY (followup_reports_id) REFERENCES followup_reports (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_report_indicators_groups DROP FOREIGN KEY FK_35C507F09A42B392');
        $this->addSql('ALTER TABLE followup_report_indicators_groups DROP FOREIGN KEY FK_35C507F0E79EE6BB');
        $this->addSql('ALTER TABLE followup_reports_indicators DROP FOREIGN KEY FK_A8D52E719A42B392');
        $this->addSql('ALTER TABLE followup_reports_indicators DROP FOREIGN KEY FK_A8D52E71220CD44');
        $this->addSql('ALTER TABLE followup_reports_indicators DROP FOREIGN KEY FK_A8D52E712B656855');
        $this->addSql('DROP TABLE followup_report_indicators_groups');
        $this->addSql('DROP TABLE followup_reports_indicators');
    }
}
