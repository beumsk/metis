<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221201103624 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE stats_definition');
        $this->addSql('ALTER TABLE patients CHANGE first_contact_date first_contact_date DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_contacts ADD link_type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A6172B82AD666 FOREIGN KEY (link_type_id) REFERENCES suggestions (id)');
        $this->addSql('CREATE INDEX IDX_EE6A6172B82AD666 ON patients_contacts (link_type_id)');
        $this->addSql('ALTER TABLE patients_patients ADD link_type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_patients ADD CONSTRAINT FK_F1E65A2DB82AD666 FOREIGN KEY (link_type_id) REFERENCES suggestions (id)');
        $this->addSql('CREATE INDEX IDX_F1E65A2DB82AD666 ON patients_patients (link_type_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE stats_definition (stdf_id INT AUTO_INCREMENT NOT NULL, title VARCHAR(45) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_0900_ai_ci`, query LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_0900_ai_ci`, priority VARCHAR(45) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_0900_ai_ci`, PRIMARY KEY(stdf_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_0900_ai_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE patients CHANGE first_contact_date first_contact_date LONGTEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A6172B82AD666');
        $this->addSql('DROP INDEX IDX_EE6A6172B82AD666 ON patients_contacts');
        $this->addSql('ALTER TABLE patients_contacts DROP link_type_id');
        $this->addSql('ALTER TABLE patients_patients DROP FOREIGN KEY FK_F1E65A2DB82AD666');
        $this->addSql('DROP INDEX IDX_F1E65A2DB82AD666 ON patients_patients');
        $this->addSql('ALTER TABLE patients_patients DROP link_type_id');
    }
}
