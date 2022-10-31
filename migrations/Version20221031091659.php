<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221031091659 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE followup_report_contact (fore_id INT NOT NULL, cont_id INT NOT NULL, INDEX IDX_C66684A89A42B392 (fore_id), INDEX IDX_C66684A885CFD64C (cont_id), PRIMARY KEY(fore_id, cont_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE followup_report_contact ADD CONSTRAINT FK_C66684A89A42B392 FOREIGN KEY (fore_id) REFERENCES followup_reports (id)');
        $this->addSql('ALTER TABLE followup_report_contact ADD CONSTRAINT FK_C66684A885CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_report_contact DROP FOREIGN KEY FK_C66684A89A42B392');
        $this->addSql('ALTER TABLE followup_report_contact DROP FOREIGN KEY FK_C66684A885CFD64C');
        $this->addSql('DROP TABLE followup_report_contact');
    }
}
