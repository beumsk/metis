<?php

namespace App\Listenners;

use Symfony\Component\Security\Http\Event\LogoutEvent;

class LogoutListener
{

    public function onSymfonyComponentSecurityHttpEventLogoutEvent(LogoutEvent $event)
    {
        $response = $event->getResponse();
        $response->headers->clearCookie('BEARER');
        $response->headers->clearCookie('REFRESH_TOKEN');

        $event->setResponse($response);
    }
}
