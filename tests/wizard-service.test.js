module.exports = function(app) {
    describe('wizard-service', function() {

    	var wizardService;

    	beforeEach(function() {
    		angular.mock.module(app.name);

    		inject(function(_WizardService_) {
    			wizardService = _WizardService_;
    		});

    	});

        it('should step backward', function() {
        	var data = {};
        	var data.appStep = 2;
        	wizardService.stepBackward();

        	expect(data.appStep).to.equal(1);
        });
    });
}