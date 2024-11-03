import { cn } from '@/lib/utils';
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ButtonProps<T extends ElementType> = {
  as?: T; // Permet de changer le tag utilisé par le composant
  className?: string; // Ajout de classes CSS personnalisées
  children?: ReactNode; // Contenu à l'intérieur du composant Button
} & ComponentPropsWithoutRef<T>; // Inclut toutes les autres props possibles pour ce type de tag

const Button = <T extends ElementType = "button">({
  as,
  className,
  children,
  ...props
}: ButtonProps<T>) => {
  // Par défaut, utilise "button" si `as` n'est pas fourni
  const Tag = as || "button";

  // Combine la classe de base "button" avec les classes personnalisées
  const combinedClassName = `button bg-dark-400 hover:bg-dark-200 border-[1px] border-dark-200 rounded-md py-4 flex justify-center text-xs text-white ${className || ""}`.trim();

  return <Tag className={cn(combinedClassName)} {...props} >{children}</Tag>;
};

export default Button;