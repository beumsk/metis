<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221028080606 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_reports_contact DROP FOREIGN KEY FK_AC6AE1D485CFD64C');
        $this->addSql('ALTER TABLE followup_reports_contact DROP FOREIGN KEY FK_AC6AE1D49A42B392');
        $this->addSql('DROP TABLE followup_reports_contact');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE followup_reports_contact (fore_id INT NOT NULL, cont_id INT NOT NULL, INDEX IDX_AC6AE1D49A42B392 (fore_id), INDEX IDX_AC6AE1D485CFD64C (cont_id), PRIMARY KEY(fore_id, cont_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE followup_reports_contact ADD CONSTRAINT FK_AC6AE1D485CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE followup_reports_contact ADD CONSTRAINT FK_AC6AE1D49A42B392 FOREIGN KEY (fore_id) REFERENCES followup_reports (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
    }
}
