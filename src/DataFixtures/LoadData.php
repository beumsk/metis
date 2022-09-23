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
        for ($i = 0; $i < 1020; $i++) {
            $auteurs[$i] = new Patients();
            $auteurs[$i]->setFirstName($faker->lastName);
            $auteurs[$i]->setLastName($faker->firstName);
            $auteurs[$i]->setNicknames($faker->userName);
            $auteurs[$i]->setBirthdate($faker->dateTime);
            $auteurs[$i]->setStory($faker->text());
            $auteurs[$i]->setStatus($faker->word);
            $auteurs[$i]->setBirthLocation($faker->locale);
            $auteurs[$i]->setFollowUpType("1");
            $auteurs[$i]->setTeam($faker->word);
            $manager->persist($auteurs[$i]);
        }


        $manager->flush();
    }
}
