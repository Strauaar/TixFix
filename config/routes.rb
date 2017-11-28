Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :new, :destroy]
    resources :users, only: [:create, :new]
    resources :events, only: [:index]
    resources :subevents, path: :events, only: [:show]
    resources :categories, only: [:show]
  end
end
