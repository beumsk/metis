<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221031084738 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_report_activity_place DROP FOREIGN KEY FK_B78F4D8C85CFD64C');
        $this->addSql('DROP INDEX IDX_B78F4D8C85CFD64C ON followup_report_activity_place');
        $this->addSql('DROP INDEX `primary` ON followup_report_activity_place');
        $this->addSql('ALTER TABLE followup_report_activity_place CHANGE cont_id plac_id INT NOT NULL');
        $this->addSql('ALTER TABLE followup_report_activity_place ADD CONSTRAINT FK_B78F4D8C1AF3DA46 FOREIGN KEY (plac_id) REFERENCES contacts (id)');
        $this->addSql('CREATE INDEX IDX_B78F4D8C1AF3DA46 ON followup_report_activity_place (plac_id)');
        $this->addSql('ALTER TABLE followup_report_activity_place ADD PRIMARY KEY (fora_id, plac_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_report_activity_place DROP FOREIGN KEY FK_B78F4D8C1AF3DA46');
        $this->addSql('DROP INDEX IDX_B78F4D8C1AF3DA46 ON followup_report_activity_place');
        $this->addSql('DROP INDEX `PRIMARY` ON followup_report_activity_place');
        $this->addSql('ALTER TABLE followup_report_activity_place CHANGE plac_id cont_id INT NOT NULL');
        $this->addSql('ALTER TABLE followup_report_activity_place ADD CONSTRAINT FK_B78F4D8C85CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_B78F4D8C85CFD64C ON followup_report_activity_place (cont_id)');
        $this->addSql('ALTER TABLE followup_report_activity_place ADD PRIMARY KEY (fora_id, cont_id)');
    }
}
