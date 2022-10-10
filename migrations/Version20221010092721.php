<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221010092721 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE indicators_choices (id INT AUTO_INCREMENT NOT NULL, indi_id INT DEFAULT NULL, name LONGTEXT DEFAULT NULL, score INT DEFAULT NULL, INDEX IDX_7BA15020220CD44 (indi_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE indicators_groups (id INT AUTO_INCREMENT NOT NULL, name LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE indicators_indicators_group (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE indicators_choices ADD CONSTRAINT FK_7BA15020220CD44 FOREIGN KEY (indi_id) REFERENCES indicators (id)');
        $this->addSql('ALTER TABLE contacts DROP FOREIGN KEY FK_3340157397F068A1');
        $this->addSql('ALTER TABLE contacts ADD CONSTRAINT FK_3340157397F068A1 FOREIGN KEY (orga_id) REFERENCES contacts (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE indicators_choices DROP FOREIGN KEY FK_7BA15020220CD44');
        $this->addSql('DROP TABLE indicators_choices');
        $this->addSql('DROP TABLE indicators_groups');
        $this->addSql('DROP TABLE indicators_indicators_group');
        $this->addSql('ALTER TABLE contacts DROP FOREIGN KEY FK_3340157397F068A1');
        $this->addSql('ALTER TABLE contacts ADD CONSTRAINT FK_3340157397F068A1 FOREIGN KEY (orga_id) REFERENCES organisations (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
    }
}
