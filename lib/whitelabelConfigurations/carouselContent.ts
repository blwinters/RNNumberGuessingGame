/*
import { onboardingImagesForPlatform } from '../../images/onboarding'
import { localize } from 'lib/localize'
import { Platform } from 'react-native'
import { SvgProps } from 'react-native-svg'

export type CarouselContentConfig = {
  top: string
  bottom: string
  image: React.ComponentType<SvgProps>
}

// all
const allExtrasBottom =
  Platform.OS == 'ios'
    ? localize('TITLE')(
        'Check out the Tools tab for Secure Backup, Speed Check and Find My Device.'
      )
    : localize('TITLE')(
        'Check out the Tools tab for Secure Backup, Antivirus, Wi-Fi Security, Speed Check, Storage Manager and Find My Device.'
      )
// allWithoutBackup
const allExtrasWithoutBackupBottom =
  Platform.OS == 'ios'
    ? localize('TITLE')(
        'Check out the Tools tab for Speed Check and Find My Device.'
      )
    : localize('TITLE')(
        'Check out the Tools tab for Antivirus, Speed Check, Storage Manager and Find My Device.'
      )

const allExtrasWithoutBackupAndSpeedCheck =
  Platform.OS == 'ios'
    ? localize('TITLE')('Check out the Tools tab for Find My Device.')
    : localize('TITLE')(
        'Check out the Tools tab for Antivirus, Storage Manager and Find My Device.'
      )

const top_get_most_out_of_your_devices = localize('TITLE')(
  'Get the most out of your devices.'
)

const top_all_your_devices = localize('TITLE')(
  'All your devices. All the support.'
)

const top_were_here_for_those_unexpected_moments = localize('TITLE')(
  "We're here for those unexpected moments."
)

const top_outsmart_your_smart_device = localize('TITLE')(
  'Outsmart your smart devices.'
)

const top_quick_access = localize('TITLE')(
  "Quick access to your device's safety & security tools."
)

const top_peace_of_mind = localize('TITLE')('Peace of mind and so much more...')

const bottom_lets_introduce_you_to_a_better_device_experience = localize(
  'LABEL'
)("Let's introduce you to a better device experience.")

const bottom_no_worries_live_help = localize('LABEL')(
  'No worries—live help from a tech analyst is just a tap away.'
)

const bottom_browse_our_curated = localize('LABEL')(
  'Browse our curated collection of helpful information.'
)

const bottom_checkout_extras_without_protection =
  Platform.OS == 'ios'
    ? localize('LABEL')(
        'Check out the Tools tab for Speed Check and Find My Device.'
      )
    : localize('LABEL')(
        'Check out the Tools tab for Antivirus, Speed Check, Wi-Fi Security, Storage Manager and Find My Device.'
      )
export const withoutProtection: CarouselContentConfig[] = [
  {
    top: top_get_most_out_of_your_devices,
    bottom: bottom_lets_introduce_you_to_a_better_device_experience,
    image: onboardingImagesForPlatform()[0],
  },
  {
    top: top_were_here_for_those_unexpected_moments,
    bottom: bottom_no_worries_live_help,
    image: onboardingImagesForPlatform()[1],
  },
  {
    top: top_outsmart_your_smart_device,
    bottom: bottom_browse_our_curated,
    image: onboardingImagesForPlatform()[2],
  },
  {
    top: top_quick_access,
    bottom: bottom_checkout_extras_without_protection,
    image: onboardingImagesForPlatform()[3],
  },
]

export const withoutProtectionWithoutLiveHelp: CarouselContentConfig[] =
  withoutProtection.filter((item, index) => {
    if (index != 1) {
      return item
    }
  })

export const withoutProtectionWithLiveHelpWithBackup: CarouselContentConfig[] =
  withoutProtection.map((item, index) => {
    if (index == 3) {
      return {
        top: top_quick_access,
        bottom: allExtrasBottom,
        image: onboardingImagesForPlatform()[3],
      }
    } else {
      return item
    }
  })

export const withoutProtectionWithoutLiveHelpWithBackup: CarouselContentConfig[] =
  withoutProtectionWithoutLiveHelp.map((item, index) => {
    if (index == 2) {
      // This will already come with 3 items instead of 4, so here last is 2 instead of 3
      return {
        top: top_quick_access,
        bottom: allExtrasBottom,
        image: onboardingImagesForPlatform()[3],
      }
    } else {
      return item
    }
  })

export const withProtectionWithoutEnhancedProtection: CarouselContentConfig[] =
  withoutProtection.map((item, index) => {
    if (index == 0) {
      return {
        top: top_get_most_out_of_your_devices,
        bottom: localize('LABEL')(
          'Access policy coverage, review deductibles, and manage claims.'
        ),
        image: onboardingImagesForPlatform()[0],
      }
    } else if (index == 3) {
      return {
        top: top_peace_of_mind,
        bottom: bottom_checkout_extras_without_protection,
        image: onboardingImagesForPlatform()[3],
      }
    } else {
      return item
    }
  })

export const withProtectionWithBackup: CarouselContentConfig[] =
  withProtectionWithoutEnhancedProtection.map((item, index) => {
    if (index == 3) {
      return {
        top: top_quick_access,
        bottom: allExtrasBottom,
        image: onboardingImagesForPlatform()[3],
      }
    } else {
      return item
    }
  })

export const withProtectionWithoutBackup: CarouselContentConfig[] =
  withProtectionWithoutEnhancedProtection.map((item, index) => {
    if (index == 3) {
      return {
        top: Platform.OS == 'ios' ? top_peace_of_mind : top_quick_access,
        bottom: allExtrasWithoutBackupBottom,
        image: onboardingImagesForPlatform()[3],
      }
    } else {
      return item
    }
  })

export const withProtectionWithoutBackupAndSpeedCheck: CarouselContentConfig[] =
  withProtectionWithoutEnhancedProtection.map((item, index) => {
    if (index == 3) {
      return {
        top: Platform.OS == 'ios' ? top_peace_of_mind : top_quick_access,
        bottom: allExtrasWithoutBackupAndSpeedCheck,
        image: onboardingImagesForPlatform()[3],
      }
    } else {
      return item
    }
  })

export const withProtectionWithoutLiveHelp: CarouselContentConfig[] =
  withProtectionWithoutBackup.filter((item, index) => {
    if (index != 1) {
      return item
    }
  })

export const defaultCarousel: CarouselContentConfig[] = [
  {
    top: top_get_most_out_of_your_devices,
    bottom: bottom_lets_introduce_you_to_a_better_device_experience,
    image: onboardingImagesForPlatform()[0],
  },
  {
    top: top_were_here_for_those_unexpected_moments,
    bottom: bottom_no_worries_live_help,
    image: onboardingImagesForPlatform()[1],
  },
  {
    top: top_outsmart_your_smart_device,
    bottom: bottom_browse_our_curated,
    image: onboardingImagesForPlatform()[2],
  },
  {
    top: top_peace_of_mind,
    bottom: localize('LABEL')(
      "Check out the Tools tab to view what's available to you."
    ),
    image: onboardingImagesForPlatform()[3],
  },
]

export const homeCarousel: CarouselContentConfig[] = [
  {
    top: top_get_most_out_of_your_devices,
    bottom: bottom_lets_introduce_you_to_a_better_device_experience,
    image: onboardingImagesForPlatform()[0],
  },
  {
    top: top_were_here_for_those_unexpected_moments,
    bottom: bottom_no_worries_live_help,
    image: onboardingImagesForPlatform()[1],
  },
  {
    top: top_outsmart_your_smart_device,
    bottom: bottom_browse_our_curated,
    image: onboardingImagesForPlatform()[2],
  },
]

export const timCarousel = [
  {
    top: localize('TITLE')('You deserve an upgrade!'),
    bottom: localize('LABEL')(
      'Check if your phone is eligible for a trade in and earn credit towards a new one.'
    ),
    image: onboardingImagesForPlatform()[4],
  },
  {
    top: localize('TITLE')('Outsmart your smart devices.'),
    bottom: localize('LABEL')(
      'Browse our curated collection of helpful information.'
    ),
    image: onboardingImagesForPlatform()[2],
  },
]

export const lowesHomeCarousel = [
  {
    top: top_get_most_out_of_your_devices,
    bottom: bottom_lets_introduce_you_to_a_better_device_experience,
    image: onboardingImagesForPlatform()[0],
  },
  {
    top: top_were_here_for_those_unexpected_moments,
    bottom: bottom_no_worries_live_help,
    image: onboardingImagesForPlatform()[1],
  },
  {
    top: top_all_your_devices,
    bottom: bottom_browse_our_curated,
    image: onboardingImagesForPlatform()[2],
  },
]
*/