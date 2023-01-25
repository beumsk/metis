<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230125150844 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX status_idx ON patients');
        $this->addSql('DROP INDEX UNIQ_1483A5E992FC23A8 ON user');
        $this->addSql('DROP INDEX UNIQ_1483A5E9A0D96FBF ON user');
        $this->addSql('DROP INDEX UNIQ_1483A5E9C05FB297 ON user');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
        $this->addSql('DROP INDEX UNIQ_9D2271A55E237E06 ON usersgroups');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE INDEX status_idx ON patients (status)');
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1483A5E992FC23A8 ON user (username_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1483A5E9A0D96FBF ON user (email_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1483A5E9C05FB297 ON user (confirmation_token)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_9D2271A55E237E06 ON usersgroups (name)');
    }
}
