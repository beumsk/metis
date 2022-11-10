<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221110073724 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE followup_report_goal (fore_id INT NOT NULL, fogo_id INT NOT NULL, INDEX IDX_C57898519A42B392 (fore_id), INDEX IDX_C57898515DFF4B04 (fogo_id), PRIMARY KEY(fore_id, fogo_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE followup_report_goal ADD CONSTRAINT FK_C57898519A42B392 FOREIGN KEY (fore_id) REFERENCES followup_reports (id)');
        $this->addSql('ALTER TABLE followup_report_goal ADD CONSTRAINT FK_C57898515DFF4B04 FOREIGN KEY (fogo_id) REFERENCES followup_goals (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_report_goal DROP FOREIGN KEY FK_C57898519A42B392');
        $this->addSql('ALTER TABLE followup_report_goal DROP FOREIGN KEY FK_C57898515DFF4B04');
        $this->addSql('DROP TABLE followup_report_goal');
    }
}
