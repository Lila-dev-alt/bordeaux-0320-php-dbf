<?php

namespace App\Form;

use App\Entity\CallProcessing;
use App\Entity\ContactType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CallProcessingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('comment', null, [
                'attr' => [
                    'class' => 'active'
                ]
            ])
            ->add('contactType', EntityType::class, [
                'class'        => ContactType::class,
                'choice_label' => 'name',
            ])
            ->add('referedCall', HiddenType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => CallProcessing::class,
        ]);
    }
}