<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221109135630 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contacts_information DROP FOREIGN KEY FK_72B76A47E7A1254A');
        $this->addSql('DROP INDEX IDX_72B76A47E7A1254A ON contacts_information');
        $this->addSql('ALTER TABLE contacts_information DROP contact_id');
        $this->addSql('ALTER TABLE patients ADD cont_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients ADD CONSTRAINT FK_2CCC2E2C85CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id)');
        $this->addSql('CREATE INDEX IDX_2CCC2E2C85CFD64C ON patients (cont_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contacts_information ADD contact_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE contacts_information ADD CONSTRAINT FK_72B76A47E7A1254A FOREIGN KEY (contact_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_72B76A47E7A1254A ON contacts_information (contact_id)');
        $this->addSql('ALTER TABLE patients DROP FOREIGN KEY FK_2CCC2E2C85CFD64C');
        $this->addSql('DROP INDEX IDX_2CCC2E2C85CFD64C ON patients');
        $this->addSql('ALTER TABLE patients DROP cont_id');
    }
}
