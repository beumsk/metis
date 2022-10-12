<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221011140023 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contacts_information ADD itel_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE contacts_information ADD CONSTRAINT FK_72B76A47AAD3353B FOREIGN KEY (itel_id) REFERENCES information_template_element (id)');
        $this->addSql('CREATE INDEX IDX_72B76A47AAD3353B ON contacts_information (itel_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contacts_information DROP FOREIGN KEY FK_72B76A47AAD3353B');
        $this->addSql('DROP INDEX IDX_72B76A47AAD3353B ON contacts_information');
        $this->addSql('ALTER TABLE contacts_information DROP itel_id');
    }
}
