<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221006171054 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_reports_activities ADD sugg_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE followup_reports_activities ADD CONSTRAINT FK_54939834FE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id)');
        $this->addSql('CREATE INDEX IDX_54939834FE0F17F ON followup_reports_activities (sugg_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_reports_activities DROP FOREIGN KEY FK_54939834FE0F17F');
        $this->addSql('DROP INDEX IDX_54939834FE0F17F ON followup_reports_activities');
        $this->addSql('ALTER TABLE followup_reports_activities DROP sugg_id');
    }
}
