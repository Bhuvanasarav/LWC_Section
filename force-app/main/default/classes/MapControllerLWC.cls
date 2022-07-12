public with sharing class MapControllerLWC {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id,Name, BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry, Description FROM Account where BillingCity != null ORDER BY Name Asc];
    }
}
