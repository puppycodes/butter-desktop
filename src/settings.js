import Settings from 'butter-settings-default'

Settings.tabs = {
  movie: {
    order: 1,
    name: 'Movies',
    providers: ['gdocs']
  },
  tvshow: {
    order: 2,
    name: 'Series',
    options: {itemShowPlay: false},
    providers: ['youtube?channel=midianinjafly&mode=shows']
  },
  telesur: {
    order: 3,
    name: 'TeleSur',
    providers: ['youtube?channel=telesurtv&mode=shows']
  },
  ascuri: {
      order: 3,
      name: 'ASCURI',
      providers: ['youtube?id=UC_EvIOBMTbte94t3YtJWT_Q&list=UU_EvIOBMTbte94t3YtJWT_Q&mode=list']
  }

}

export {Settings as default}
