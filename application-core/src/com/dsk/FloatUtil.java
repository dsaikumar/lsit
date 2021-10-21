package com.dsk;

public class FloatUtil {

	public boolean validateCustomFormat(String stringValue){
		if(stringValue.isEmpty()){
			return false;
		}else{
			String stringObject = stringValue.substring(2);
			Float floatObject = new Float(stringValue);
			float floatValue = Float.parseFloat(stringValue);
			if(floatValue > 0.99f || floatValue < 0){
				return false;
			}else{
				if(stringObject.length()>4){
					return false;
				}else{
					if(floatValue == 0f){
						return true;
					}else{
						if(floatValue < 0.01f){
							return false;
						}else{
							stringObject = floatObject.toString().substring(2);
							if(stringObject.length()>2){
								return false;
							}
						}
					}
				}
			}
		}
		return true;
	}
}
