require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'password encryption' do

    it 'does not save passwords to the database' do
      User.create!({
          first_name: 'aa',
          last_name: 'st',
          email: 'user@user.com',
          password: 'password'
      })
      user = User.find_by_email('user@user.com')
      expect(user.password).not_to be('password')
    end

    

  end
end