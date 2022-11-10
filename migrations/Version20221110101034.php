<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221110101034 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE followup_goals_followup_reports (followup_goals_id INT NOT NULL, followup_reports_id INT NOT NULL, INDEX IDX_70A4230D7EC05BD6 (followup_goals_id), INDEX IDX_70A4230D2B656855 (followup_reports_id), PRIMARY KEY(followup_goals_id, followup_reports_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE followup_goals_followup_reports ADD CONSTRAINT FK_70A4230D7EC05BD6 FOREIGN KEY (followup_goals_id) REFERENCES followup_goals (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE followup_goals_followup_reports ADD CONSTRAINT FK_70A4230D2B656855 FOREIGN KEY (followup_reports_id) REFERENCES followup_reports (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_goals_followup_reports DROP FOREIGN KEY FK_70A4230D7EC05BD6');
        $this->addSql('ALTER TABLE followup_goals_followup_reports DROP FOREIGN KEY FK_70A4230D2B656855');
        $this->addSql('DROP TABLE followup_goals_followup_reports');
    }
}
