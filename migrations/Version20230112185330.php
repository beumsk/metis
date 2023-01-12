<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230112185330 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE indicators_indicators_group (id INT AUTO_INCREMENT NOT NULL, igrp_id INT DEFAULT NULL, INDEX IDX_9C86660FE79EE6BB (igrp_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE indicators_indicators_group ADD CONSTRAINT FK_9C86660FE79EE6BB FOREIGN KEY (igrp_id) REFERENCES indicators_groups (id)');
        $this->addSql('ALTER TABLE patients ADD cont_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients ADD CONSTRAINT FK_2CCC2E2C85CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id) ON DELETE SET NULL');
        $this->addSql('CREATE INDEX IDX_2CCC2E2C85CFD64C ON patients (cont_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE indicators_indicators_group DROP FOREIGN KEY FK_9C86660FE79EE6BB');
        $this->addSql('DROP TABLE indicators_indicators_group');
        $this->addSql('ALTER TABLE patients DROP FOREIGN KEY FK_2CCC2E2C85CFD64C');
        $this->addSql('DROP INDEX IDX_2CCC2E2C85CFD64C ON patients');
        $this->addSql('ALTER TABLE patients DROP cont_id');
    }
}
