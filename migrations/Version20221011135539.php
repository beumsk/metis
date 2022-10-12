<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221011135539 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE information_template_block (id INT AUTO_INCREMENT NOT NULL, sugb_id INT DEFAULT NULL, block_order INT DEFAULT NULL, block_type LONGTEXT DEFAULT NULL, INDEX IDX_DE5C36FF383E014D (sugb_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE information_template_element (id INT AUTO_INCREMENT NOT NULL, itbk_id INT DEFAULT NULL, suge_id INT DEFAULT NULL, sugv_id INT DEFAULT NULL, required INT DEFAULT NULL, element_order INT DEFAULT NULL, edit_type INT NOT NULL, type INT NOT NULL, INDEX IDX_D4072B528524D192 (itbk_id), INDEX IDX_D4072B52A5E939F4 (suge_id), INDEX IDX_D4072B52E745C185 (sugv_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE information_template_block ADD CONSTRAINT FK_DE5C36FF383E014D FOREIGN KEY (sugb_id) REFERENCES suggestions (id)');
        $this->addSql('ALTER TABLE information_template_element ADD CONSTRAINT FK_D4072B528524D192 FOREIGN KEY (itbk_id) REFERENCES information_template_block (id)');
        $this->addSql('ALTER TABLE information_template_element ADD CONSTRAINT FK_D4072B52A5E939F4 FOREIGN KEY (suge_id) REFERENCES suggestions (id)');
        $this->addSql('ALTER TABLE information_template_element ADD CONSTRAINT FK_D4072B52E745C185 FOREIGN KEY (sugv_id) REFERENCES suggestions (id)');
        $this->addSql('ALTER TABLE contacts_information DROP FOREIGN KEY FK_72B76A47AAD3353B');
        $this->addSql('DROP INDEX IDX_72B76A47AAD3353B ON contacts_information');
        $this->addSql('ALTER TABLE contacts_information DROP itel_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE information_template_block DROP FOREIGN KEY FK_DE5C36FF383E014D');
        $this->addSql('ALTER TABLE information_template_element DROP FOREIGN KEY FK_D4072B528524D192');
        $this->addSql('ALTER TABLE information_template_element DROP FOREIGN KEY FK_D4072B52A5E939F4');
        $this->addSql('ALTER TABLE information_template_element DROP FOREIGN KEY FK_D4072B52E745C185');
        $this->addSql('DROP TABLE information_template_block');
        $this->addSql('DROP TABLE information_template_element');
        $this->addSql('ALTER TABLE contacts_information ADD itel_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE contacts_information ADD CONSTRAINT FK_72B76A47AAD3353B FOREIGN KEY (itel_id) REFERENCES patients_information_template_element (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_72B76A47AAD3353B ON contacts_information (itel_id)');
    }
}
