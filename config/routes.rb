Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :new, :destroy]
    resources :users, only: [:create, :new]
    resources :events, only: [:index]
    resources :subevents, path: :events, only: [:show]
    resources :categories, only: [:show]
    resources :performer_likes, only: [:create, :destroy, :index]
    resources :tickets, only: [:create, :index, :show, :update]
    get 'users/:id/tickets_selling' => 'users#tickets_selling'
    get 'users/:id/tickets_buying' => 'users#tickets_buying'
    get 'events/:id/tickets' => 'subevents#available_tickets'
    get 'user/tickets/sold/price' => 'users#tickets_sold_price'
    get 'user/tickets/bought' => 'users#tickets_bought'
    get 'user/upcoming_events' => 'users#upcoming_events'
    get 'user/tickets/sold' => 'users#sold_tickets'
    get 'user/tickets/selling' => 'users#tickets_selling'
  end
end
