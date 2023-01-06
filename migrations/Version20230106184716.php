<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230106184716 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE followup_report_indicators_groups (id INT NOT NULL, igrp_id INT NOT NULL, INDEX IDX_35C507F0BF396750 (id), INDEX IDX_35C507F0E79EE6BB (igrp_id), PRIMARY KEY(id, igrp_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE followup_report_indicators_groups ADD CONSTRAINT FK_35C507F0BF396750 FOREIGN KEY (id) REFERENCES followup_reports (id)');
        $this->addSql('ALTER TABLE followup_report_indicators_groups ADD CONSTRAINT FK_35C507F0E79EE6BB FOREIGN KEY (igrp_id) REFERENCES indicators_groups (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_report_indicators_groups DROP FOREIGN KEY FK_35C507F0BF396750');
        $this->addSql('ALTER TABLE followup_report_indicators_groups DROP FOREIGN KEY FK_35C507F0E79EE6BB');
        $this->addSql('DROP TABLE followup_report_indicators_groups');
    }
}
