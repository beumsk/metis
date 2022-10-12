<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221011132632 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contacts_information DROP FOREIGN KEY FK_72B76A4785CFD64C');
        $this->addSql('ALTER TABLE contacts_information DROP FOREIGN KEY FK_72B76A47AAD3353B');
        $this->addSql('ALTER TABLE contacts_information DROP FOREIGN KEY FK_72B76A47FE0F17F');
        $this->addSql('DROP INDEX IDX_72B76A4785CFD64C ON contacts_information');
        $this->addSql('DROP INDEX IDX_72B76A47AAD3353B ON contacts_information');
        $this->addSql('DROP INDEX IDX_72B76A47FE0F17F ON contacts_information');
        $this->addSql('ALTER TABLE contacts_information DROP cont_id, DROP itel_id, DROP sugg_id, CHANGE comment comment LONGTEXT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contacts_information ADD cont_id INT DEFAULT NULL, ADD itel_id INT DEFAULT NULL, ADD sugg_id INT DEFAULT NULL, CHANGE comment comment LONGTEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE contacts_information ADD CONSTRAINT FK_72B76A4785CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE contacts_information ADD CONSTRAINT FK_72B76A47AAD3353B FOREIGN KEY (itel_id) REFERENCES patients_information_template_element (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE contacts_information ADD CONSTRAINT FK_72B76A47FE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_72B76A4785CFD64C ON contacts_information (cont_id)');
        $this->addSql('CREATE INDEX IDX_72B76A47AAD3353B ON contacts_information (itel_id)');
        $this->addSql('CREATE INDEX IDX_72B76A47FE0F17F ON contacts_information (sugg_id)');
    }
}
