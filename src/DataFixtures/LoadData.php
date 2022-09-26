<?php

namespace App\DataFixtures;

use App\Entity\Patients;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker;

class LoadData extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        $auteurs = array();
        for ($i = 0; $i < 200; $i++) {
            $auteurs[$i] = new Patients();
            $auteurs[$i]->setFirstName($faker->lastName);
            $auteurs[$i]->setLastName($faker->firstName);
            $auteurs[$i]->setNicknames($faker->userName);
            $auteurs[$i]->setBirthdate($faker->dateTime('Y-m-d'));
            $auteurs[$i]->setStory($faker->text());
            $auteurs[$i]->setStatus("POST-SUIVI");
            $auteurs[$i]->setBirthLocation("Bruxelles");
            $auteurs[$i]->setFollowUpType("1");
            $auteurs[$i]->setTeam("Soleil");
            $manager->persist($auteurs[$i]);
        }


        $manager->flush();
    }
}
