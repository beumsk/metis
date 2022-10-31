<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221027080902 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX `primary` ON followup_report_activity_place');
        $this->addSql('ALTER TABLE followup_report_activity_place ADD cont_id INT NOT NULL, CHANGE id fora_id INT NOT NULL');
        $this->addSql('ALTER TABLE followup_report_activity_place ADD CONSTRAINT FK_B78F4D8C152024C5 FOREIGN KEY (fora_id) REFERENCES followup_reports_activities (id)');
        $this->addSql('ALTER TABLE followup_report_activity_place ADD CONSTRAINT FK_B78F4D8C85CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id)');
        $this->addSql('CREATE INDEX IDX_B78F4D8C152024C5 ON followup_report_activity_place (fora_id)');
        $this->addSql('CREATE INDEX IDX_B78F4D8C85CFD64C ON followup_report_activity_place (cont_id)');
        $this->addSql('ALTER TABLE followup_report_activity_place ADD PRIMARY KEY (fora_id, cont_id)');
        $this->addSql('DROP INDEX `primary` ON followup_report_activity_contact');
        $this->addSql('ALTER TABLE followup_report_activity_contact ADD cont_id INT NOT NULL, CHANGE id fora_id INT NOT NULL');
        $this->addSql('ALTER TABLE followup_report_activity_contact ADD CONSTRAINT FK_5F0F668D152024C5 FOREIGN KEY (fora_id) REFERENCES followup_reports_activities (id)');
        $this->addSql('ALTER TABLE followup_report_activity_contact ADD CONSTRAINT FK_5F0F668D85CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id)');
        $this->addSql('CREATE INDEX IDX_5F0F668D152024C5 ON followup_report_activity_contact (fora_id)');
        $this->addSql('CREATE INDEX IDX_5F0F668D85CFD64C ON followup_report_activity_contact (cont_id)');
        $this->addSql('ALTER TABLE followup_report_activity_contact ADD PRIMARY KEY (fora_id, cont_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_report_activity_contact DROP FOREIGN KEY FK_5F0F668D152024C5');
        $this->addSql('ALTER TABLE followup_report_activity_contact DROP FOREIGN KEY FK_5F0F668D85CFD64C');
        $this->addSql('DROP INDEX IDX_5F0F668D152024C5 ON followup_report_activity_contact');
        $this->addSql('DROP INDEX IDX_5F0F668D85CFD64C ON followup_report_activity_contact');
        $this->addSql('DROP INDEX `PRIMARY` ON followup_report_activity_contact');
        $this->addSql('ALTER TABLE followup_report_activity_contact ADD id INT NOT NULL, DROP fora_id, DROP cont_id');
        $this->addSql('ALTER TABLE followup_report_activity_contact ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE followup_report_activity_place DROP FOREIGN KEY FK_B78F4D8C152024C5');
        $this->addSql('ALTER TABLE followup_report_activity_place DROP FOREIGN KEY FK_B78F4D8C85CFD64C');
        $this->addSql('DROP INDEX IDX_B78F4D8C152024C5 ON followup_report_activity_place');
        $this->addSql('DROP INDEX IDX_B78F4D8C85CFD64C ON followup_report_activity_place');
        $this->addSql('DROP INDEX `PRIMARY` ON followup_report_activity_place');
        $this->addSql('ALTER TABLE followup_report_activity_place ADD id INT NOT NULL, DROP fora_id, DROP cont_id');
        $this->addSql('ALTER TABLE followup_report_activity_place ADD PRIMARY KEY (id)');
    }
}
