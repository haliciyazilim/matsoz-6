
require 'spec_helper'

describe EntriesController do
  describe 'set all entries' do
    before :each do
      entry1 = mock('entry1')
      entry2 = mock('entry2')
      @fake_entries = [entry1, entry2]
      Entry.stub(:order).and_return(Entry)
      Entry.stub(:all).and_return(@fake_entries)      
    end
    
    it 'should call Entry.all' do
      Entry.should_receive(:all)
      get :index
    end
    
    it 'should assign all_entries' do
      get :index
      assigns(:all_entries).should == @fake_entries
    end
  end
  
  describe 'show entry' do
    before :each do
      @fake_entry = mock('entry')
      Entry.stub(:find).and_return(@fake_entry)
    end
    
    it 'should find the entry from the database' do
      Entry.should_receive(:find).with("1")
      get :show, { :id => "1" }
    end
    
    it 'should make entry available' do
      get :show, { :id => "1" }
      assigns(:entry).should == @fake_entry
    end
  end
  
  describe 'create new entry' do
    before :each do
      @fake_entry = mock('Entry', :name => 'name', :description => 'description')
      Entry.stub(:create).and_return(@fake_entry)
    end
    
    it 'should create a new entry based on parameters' do
      Entry.should_receive(:create).with('entry')
      post :create, { :entry => 'entry' }
    end
    
    it 'should create confirmation notice' do
      post :create, { :entry => 'entry' }
      flash[:notice].should_not be nil
    end
    
    it 'should redirect to the entries path' do
      post :create, { :entry => 'entry' }
      response.should redirect_to entry_path(@fake_entry)
    end
  end
  
  describe 'edit entry' do
    before :each do
      @fake_entry = mock('entry')
      Entry.stub(:find).and_return(@fake_entry)
    end

    it 'should find the entry from the database' do
      Entry.should_receive(:find).with("1")
      get :edit, { :id => "1" }
    end

    it 'should make entry available' do
      get :edit, { :id => "1" }
      assigns(:entry).should == @fake_entry
    end
  end

  describe 'update entry' do
    before :each do
      @fake_entry = mock('Entry', :word => 'word', :meaning => 'meaning')
      Entry.stub(:find).and_return(@fake_entry)
      @fake_entry.stub(:update_attributes!).and_return(@fake_entry)
      @params = { :id => 1, :entry => 'entry' }
    end

    it 'should find the correct entry and redirect to it' do
      Entry.should_receive(:find).with("1").and_return(@fake_entry)
      put :update, @params
      response.should redirect_to entry_path(@fake_entry)
    end
     
    it 'should call the update method on the fake_entry with parameters' do
      @fake_entry.should_receive(:update_attributes!).with(@params[:entry]).and_return(@fake_entry)
      put :update, @params
    end

    it 'should create confirmation notice' do
      put :update, @params
      flash[:notice].should_not be nil
    end
  end

  describe 'destroy entry' do
    before :each do
      @fake_entry = mock('Entry', :word => 'word', :meaning => 'meaning')
      Entry.stub(:find).and_return(@fake_entry)
      @fake_entry.stub(:destroy)
      @params = { :id => 1 }
    end

    it 'should find the correct entry' do
      Entry.should_receive(:find).with("1").and_return(@fake_entry)
      delete :destroy, @params
    end
     
    it 'should call the destroy method on the fake_entry' do
      @fake_entry.should_receive(:destroy)
      delete :destroy, @params
    end

    it 'should create confirmation notice' do
      delete :destroy, @params
      flash[:notice].should_not be nil
    end
    
    it 'should redirect to entries page' do
      delete :destroy, @params
      response.should redirect_to entries_path
    end
  end
end