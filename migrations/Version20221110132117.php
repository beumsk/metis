<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221110132117 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_report_goal DROP FOREIGN KEY FK_C57898515DFF4B04');
        $this->addSql('DROP INDEX `primary` ON followup_report_goal');
        $this->addSql('ALTER TABLE followup_report_goal ADD CONSTRAINT FK_C57898519A42B392 FOREIGN KEY (fore_id) REFERENCES followup_reports (id)');
        $this->addSql('ALTER TABLE followup_report_goal ADD CONSTRAINT FK_C57898515DFF4B04 FOREIGN KEY (fogo_id) REFERENCES followup_goals (id)');
        $this->addSql('ALTER TABLE followup_report_goal ADD PRIMARY KEY (fogo_id, fore_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_report_goal DROP FOREIGN KEY FK_C57898519A42B392');
        $this->addSql('ALTER TABLE followup_report_goal DROP FOREIGN KEY FK_C57898515DFF4B04');
        $this->addSql('DROP INDEX `PRIMARY` ON followup_report_goal');
        $this->addSql('ALTER TABLE followup_report_goal ADD CONSTRAINT FK_C57898515DFF4B04 FOREIGN KEY (fogo_id) REFERENCES followup_reports (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE followup_report_goal ADD PRIMARY KEY (fore_id, fogo_id)');
    }
}
