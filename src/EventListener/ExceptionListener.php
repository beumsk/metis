<?php

namespace App\EventListener;

use Psr\Log\LoggerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelEvents;

class ExceptionListener implements EventSubscriberInterface
{
    protected $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    /**
     * Use `console debug:event-dispatcher kernel.exception` command to check
     * if underlying listeners are in correct priority orders.
     *
     * {@inheritdoc}
     */
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::EXCEPTION => [
                ['handleException', 100]
            ]
        ];
    }

    public function handleException(GetResponseForExceptionEvent $event)
    {
        $exception = $event->getException();
      
        $this->logger->critical($exception);
    }
}