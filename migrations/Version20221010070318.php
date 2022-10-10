<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221010070318 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contacts DROP FOREIGN KEY FK_3340157397F068A1');
        $this->addSql('ALTER TABLE contacts ADD CONSTRAINT FK_3340157397F068A1 FOREIGN KEY (orga_id) REFERENCES organisations (id)');
        $this->addSql('ALTER TABLE followup_goals DROP FOREIGN KEY FK_BB997A6BFE0F17F');
        $this->addSql('ALTER TABLE followup_goals ADD func_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE followup_goals ADD CONSTRAINT FK_BB997A6BB874B730 FOREIGN KEY (func_id) REFERENCES suggestions (id)');
        $this->addSql('ALTER TABLE followup_goals ADD CONSTRAINT FK_BB997A6BFE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id)');
        $this->addSql('CREATE INDEX IDX_BB997A6BB874B730 ON followup_goals (func_id)');
        $this->addSql('ALTER TABLE followup_reports DROP FOREIGN KEY FK_2FD5F4B81AF3DA46');
        $this->addSql('ALTER TABLE followup_reports ADD CONSTRAINT FK_2FD5F4B81AF3DA46 FOREIGN KEY (plac_id) REFERENCES places (id)');
        $this->addSql('ALTER TABLE places DROP FOREIGN KEY FK_FEAF6C55FE0F17F');
        $this->addSql('DROP INDEX IDX_FEAF6C55FE0F17F ON places');
        $this->addSql('ALTER TABLE places DROP sugg_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contacts DROP FOREIGN KEY FK_3340157397F068A1');
        $this->addSql('ALTER TABLE contacts ADD CONSTRAINT FK_3340157397F068A1 FOREIGN KEY (orga_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE SET NULL');
        $this->addSql('ALTER TABLE followup_goals DROP FOREIGN KEY FK_BB997A6BB874B730');
        $this->addSql('ALTER TABLE followup_goals DROP FOREIGN KEY FK_BB997A6BFE0F17F');
        $this->addSql('DROP INDEX IDX_BB997A6BB874B730 ON followup_goals');
        $this->addSql('ALTER TABLE followup_goals DROP func_id');
        $this->addSql('ALTER TABLE followup_goals ADD CONSTRAINT FK_BB997A6BFE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id) ON UPDATE NO ACTION ON DELETE SET NULL');
        $this->addSql('ALTER TABLE followup_reports DROP FOREIGN KEY FK_2FD5F4B81AF3DA46');
        $this->addSql('ALTER TABLE followup_reports ADD CONSTRAINT FK_2FD5F4B81AF3DA46 FOREIGN KEY (plac_id) REFERENCES places (id) ON UPDATE NO ACTION ON DELETE SET NULL');
        $this->addSql('ALTER TABLE places ADD sugg_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE places ADD CONSTRAINT FK_FEAF6C55FE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_FEAF6C55FE0F17F ON places (sugg_id)');
    }
}
