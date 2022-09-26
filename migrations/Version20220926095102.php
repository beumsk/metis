<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220926095102 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE suggestions CHANGE require_custom_value require_custom_value SMALLINT DEFAULT NULL, CHANGE is_locked is_locked SMALLINT DEFAULT NULL, CHANGE is_deleted is_deleted SMALLINT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE suggestions CHANGE require_custom_value require_custom_value INT DEFAULT NULL, CHANGE is_locked is_locked INT DEFAULT NULL, CHANGE is_deleted is_deleted INT DEFAULT NULL');
    }
}
