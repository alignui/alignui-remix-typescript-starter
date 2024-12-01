// AlignUI Notification v0.0.0

import * as React from 'react';
import * as Alert from '~/components/ui/alert';
import { cnExt } from '~/utils/cn';
import * as NotificationPrimitives from '@radix-ui/react-toast';
import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
  RiMagicFill,
} from '@remixicon/react';

const NotificationProvider = NotificationPrimitives.Provider;
const NotificationAction = NotificationPrimitives.Action;

const NotificationViewport = React.forwardRef<
  React.ComponentRef<typeof NotificationPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof NotificationPrimitives.Viewport>
>(({ className, ...rest }, forwardedRef) => (
  <NotificationPrimitives.Viewport
    ref={forwardedRef}
    className={cnExt(
      'fixed left-0 top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-5 p-4 sm:bottom-0 sm:left-auto sm:right-0 sm:top-auto sm:max-w-[438px] sm:flex-col sm:p-6',
      className,
    )}
    {...rest}
  />
));
NotificationViewport.displayName = 'NotificationViewport';

type NotificationProps = React.ComponentPropsWithoutRef<
  typeof NotificationPrimitives.Root
> &
  Pick<
    React.ComponentPropsWithoutRef<typeof Alert.Root>,
    'status' | 'variant'
  > & {
    title?: string;
    description?: React.ReactNode;
    action?: React.ReactNode;
    disableDismiss?: boolean;
  };

const Notification = React.forwardRef<
  React.ComponentRef<typeof NotificationPrimitives.Root>,
  NotificationProps
>(
  (
    {
      className,
      status,
      variant = 'filled',
      title,
      description,
      action,
      disableDismiss = false,
      ...rest
    }: NotificationProps,
    forwardedRef,
  ) => {
    let Icon: React.ElementType;

    switch (status) {
      case 'success':
        Icon = RiCheckboxCircleFill;
        break;
      case 'warning':
        Icon = RiAlertFill;
        break;
      case 'error':
        Icon = RiErrorWarningFill;
        break;
      case 'information':
        Icon = RiInformationFill;
        break;
      case 'feature':
        Icon = RiMagicFill;
        break;
      default:
        Icon = RiErrorWarningFill;
        break;
    }

    return (
      <NotificationPrimitives.Root
        ref={forwardedRef}
        className={cnExt(
          // open
          'data-[state=open]:animate-in data-[state=open]:max-[639px]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-right-full',
          // close
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:max-[639px]:slide-out-to-top-full data-[state=closed]:sm:slide-out-to-right-full',
          // swipe
          'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[swipe=end]:animate-out',
          className,
        )}
        asChild
        {...rest}
      >
        <Alert.Root variant={variant} status={status} size='large'>
          <Alert.Icon as={Icon} aria-hidden='true' />
          <div className='flex w-full flex-col gap-2.5'>
            <div className='flex w-full flex-col gap-1'>
              {title && (
                <NotificationPrimitives.Title className='text-label-sm'>
                  {title}
                </NotificationPrimitives.Title>
              )}
              {description && (
                <NotificationPrimitives.Description>
                  {description}
                </NotificationPrimitives.Description>
              )}
            </div>
            {action && <div className='flex items-center gap-2'>{action}</div>}
          </div>
          {!disableDismiss && (
            <NotificationPrimitives.Close aria-label='Close'>
              <Alert.CloseIcon />
            </NotificationPrimitives.Close>
          )}
        </Alert.Root>
      </NotificationPrimitives.Root>
    );
  },
);
Notification.displayName = 'Notification';

export {
  Notification as Root,
  NotificationProvider as Provider,
  NotificationAction as Action,
  NotificationViewport as Viewport,
  type NotificationProps,
};
