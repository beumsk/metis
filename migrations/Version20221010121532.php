<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221010121532 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE indicators_indicators_group ADD igrp_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE indicators_indicators_group ADD CONSTRAINT FK_9C86660FE79EE6BB FOREIGN KEY (igrp_id) REFERENCES indicators_groups (id)');
        $this->addSql('CREATE INDEX IDX_9C86660FE79EE6BB ON indicators_indicators_group (igrp_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE indicators_indicators_group DROP FOREIGN KEY FK_9C86660FE79EE6BB');
        $this->addSql('DROP INDEX IDX_9C86660FE79EE6BB ON indicators_indicators_group');
        $this->addSql('ALTER TABLE indicators_indicators_group DROP igrp_id');
    }
}
