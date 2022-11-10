<?php

namespace App\Serializer;

class MyMaxDepthHandler
{
    public function __invoke($innerObject, $outerObject, string $attributeName, string $format = null, array $context = [])
    {
        return $innerObject->id;
    }
}
