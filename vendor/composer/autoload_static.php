<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita553e7a4aee237ec8cd07aa5a84e8365
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita553e7a4aee237ec8cd07aa5a84e8365::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita553e7a4aee237ec8cd07aa5a84e8365::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}