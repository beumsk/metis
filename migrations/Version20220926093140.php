<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220926093140 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients CHANGE description description LONGTEXT DEFAULT NULL, CHANGE is_alive is_alive TINYINT(1) DEFAULT NULL, CHANGE story story LONGTEXT DEFAULT NULL, CHANGE birth_location birth_location LONGTEXT DEFAULT NULL, CHANGE team team VARCHAR(50) DEFAULT NULL, CHANGE antenna antenna VARCHAR(50) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients CHANGE birth_location birth_location LONGTEXT NOT NULL, CHANGE story story LONGTEXT NOT NULL, CHANGE team team VARCHAR(50) NOT NULL, CHANGE description description LONGTEXT NOT NULL, CHANGE is_alive is_alive TINYINT(1) NOT NULL, CHANGE antenna antenna VARCHAR(50) NOT NULL');
    }
}
