<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221109135826 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients DROP FOREIGN KEY FK_2CCC2E2C85CFD64C');
        $this->addSql('DROP INDEX IDX_2CCC2E2C85CFD64C ON patients');
        $this->addSql('ALTER TABLE patients DROP cont_id');
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A617261D0310E');
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A6172E7A1254A');
        $this->addSql('DROP INDEX IDX_EE6A6172E7A1254A ON patients_contacts');
        $this->addSql('ALTER TABLE patients_contacts DROP contact_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients ADD cont_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients ADD CONSTRAINT FK_2CCC2E2C85CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_2CCC2E2C85CFD64C ON patients (cont_id)');
        $this->addSql('ALTER TABLE patients_contacts ADD contact_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A617261D0310E FOREIGN KEY (pati_id) REFERENCES patients (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A6172E7A1254A FOREIGN KEY (contact_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_EE6A6172E7A1254A ON patients_contacts (contact_id)');
    }
}
