<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221121111111 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A6172E7A1254A');
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A617285CFD64C');
        $this->addSql('DROP INDEX IDX_EE6A6172E7A1254A ON patients_contacts');
        $this->addSql('ALTER TABLE patients_contacts DROP contact_id');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A617285CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A617285CFD64C');
        $this->addSql('ALTER TABLE patients_contacts ADD contact_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A6172E7A1254A FOREIGN KEY (contact_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A617285CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_EE6A6172E7A1254A ON patients_contacts (contact_id)');
    }
}
