<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221202124554 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A61726B899279');
        $this->addSql('DROP INDEX IDX_EE6A61726B899279 ON patients_contacts');
        $this->addSql('ALTER TABLE patients_contacts DROP patient_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_contacts ADD patient_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A61726B899279 FOREIGN KEY (patient_id) REFERENCES patients (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_EE6A61726B899279 ON patients_contacts (patient_id)');
    }
}
