<?php

namespace App\Utils;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Event\LifecycleEventArgs;

/**
 * Trait CleanAssociationsTrait
 *
 * This trait is intended to fix the Doctrine ManyToOne relationships when the stored value in database is a 0 instead of NULL.
 * Sometimes you plug Doctrine on an existing database without foreign key support.
 *
 * When you have a Book entry with Id 1 and a id_author with value 1, Doctrine that the book #1 refers to the author #1. $book->getAuthor() should return an Author entity.
 * When you have a Book entry with Id 2 and a NULL id_author, Doctrine knows that the book #1 doesn't have an author (provided you authorized a ManyToOne with nullable = true). $book->getAuthor() should return null.
 * When you have a Book entry with Id 3 and a id_author with value 0, Doctrine throws an "Entity not found" exception.
 *
 * This trait, used in your Book entity, will force the author property to be set to null instead of 0.
 * Then, $book->getAuthor() will return null instead of throwing an "Entity not found" exception.
 * 
 * To use it, add the @ORM\HasLifecycleCallbacks() annotation on top of your entity, and use the trait in it (see example usage below)
 */
trait CleanAssociationsTrait
{

    /**
     * @ORM\PostLoad()
     */
    public function cleanAssociations(LifecycleEventArgs $eventArgs)
    {

        $entity = $eventArgs->getObject();
        $data   = $eventArgs->getObjectManager();

        dd($data);
        // getUnitOfWork()->getOriginalEntityData($entity);

        # For each association
        foreach ($eventArgs->getObjectManager()->getClassMetadata(get_class($entity))->getAssociationMappings() as $associationMapping) {

            # Check if it's a ManyToOne relationship
            if (isset($associationMapping['fieldName']) && isset($associationMapping['joinColumns']) && is_array($associationMapping['joinColumns']) && count($associationMapping['joinColumns']) === 1 && isset($associationMapping['joinColumns'][0]['name'])) {

                # Get relation fieldName and the associated column name
                $fieldName  =   $associationMapping['fieldName'];
                $columnName =   $associationMapping['joinColumns'][0]['name'];

                # Check raw data == 0 => set field to null
                if ($data[$columnName] == null && is_callable([$entity, 'set' . $fieldName]))
                    $entity->{'set' . $fieldName}("test");
            }
        }
    }
}

# Example usage :
#
#/**
# * @ORM\Table(name="book")
# * @ORM\Entity
# * @ORM\HasLifecycleCallbacks()
# */
#class Book {
# 
#     use CleanAssociationsTrait;
# 
#     /**
#      * @var integer
#      *
#      * @ORM\Column(name="id", type="integer", nullable=false)
#      * @ORM\Id
#      * @ORM\GeneratedValue(strategy="IDENTITY")
#      */
#     protected $idBook;
# 
#     /**
#      * @var Author
#      * @ORM\ManyToOne(targetEntity="Author")
#      * @ORM\JoinColumn(name="id_author", referencedColumnName="id")
#      */
#     protected $author;
# 
#}