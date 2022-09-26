<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220926092221 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients CHANGE nicknames nicknames LONGTEXT NOT NULL, CHANGE description description LONGTEXT NOT NULL, CHANGE story story LONGTEXT NOT NULL, CHANGE birth_location birth_location LONGTEXT NOT NULL, CHANGE team team VARCHAR(50) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients CHANGE nicknames nicknames LONGTEXT DEFAULT NULL, CHANGE birth_location birth_location LONGTEXT DEFAULT NULL, CHANGE story story LONGTEXT DEFAULT NULL, CHANGE team team VARCHAR(50) DEFAULT NULL, CHANGE description description LONGTEXT DEFAULT NULL');
    }
}
