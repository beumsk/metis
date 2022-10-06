<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221006162440 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contacts ADD orga_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE contacts ADD CONSTRAINT FK_3340157397F068A1 FOREIGN KEY (orga_id) REFERENCES organisations (id)');
        $this->addSql('CREATE INDEX IDX_3340157397F068A1 ON contacts (orga_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contacts DROP FOREIGN KEY FK_3340157397F068A1');
        $this->addSql('DROP INDEX IDX_3340157397F068A1 ON contacts');
        $this->addSql('ALTER TABLE contacts DROP orga_id');
    }
}
